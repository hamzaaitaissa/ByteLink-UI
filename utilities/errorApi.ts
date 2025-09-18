export const parseApiError = (error: any): string => {
  let errorMessage = "An unexpected error occurred";
  
  if (error?.message && typeof error.message === 'string') {
    try {
      const match = error.message.match(/^\d+\s*:\s*(.+)$/);
      if (match && match[1]) {
        const jsonPart = match[1];
        const parsedError = JSON.parse(jsonPart);
        
        const validationMessages: string[] = [];
        for (const [field, messages] of Object.entries(parsedError)) {
          if (Array.isArray(messages)) {
            validationMessages.push(...messages as string[]);
          } else if (typeof messages === 'string') {
            validationMessages.push(messages);
          }
        }
        
        if (validationMessages.length > 0) {
          return validationMessages.join('. ');
        }
      }
    } catch (parseError) {
      console.warn('Failed to parse error JSON:', parseError);
      return error.message;
    }
  }
  
  return errorMessage;
};