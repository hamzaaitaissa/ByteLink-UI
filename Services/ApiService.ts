import { getEndPoints } from "recharts/types/cartesian/ReferenceLine";

export class ApiService {
  private baseUrl: string;

  constructor() {
    // this.baseUrl =
    //   "https://bytelink-gycefrf6chgabwep.westeurope-01.azurewebsites.net";
        this.baseUrl =
      "https://localhost:7054";
  }

  private async fetchWithErrorHandeling<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    let url = `${this.baseUrl}${endpoint}`;
    const defaultHeaders: Record<string, string> = {
      "Content-Type": "application/json",
    };
    const finalOptions: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
    };
    try {
      let response = await fetch(url, finalOptions);
      if (!response.ok) {
        var errorText = await response.text();
        throw new Error(`${response.status} : ${errorText}`);
      }
      let contenType = response.headers.get("content-Type");
      if (contenType?.includes("application/json")) {
        return await response.json();
      }
      return (await response.text) as unknown as T;
    } catch (error) {
      console.error(`API call failed for ${endpoint}: `, error);
      throw error;
    }
  }

  async get(endpoint : string, customHeaders : Record<string,string> = {}){
    return this.fetchWithErrorHandeling(endpoint,{
        method : "GET",
        headers: customHeaders
    });
  }

  async post<T>(endpoint : string,data: unknown, customHeaders: Record<string, string> = {}) : Promise<T>{
    return this.fetchWithErrorHandeling(endpoint,{
        method : "POST",
        body: JSON.stringify(data),
        headers : customHeaders
    });
  }
}
