declare global {
  interface Window {
    accessToken: string | undefined;
    userId: string;
  }
}

export default global;
