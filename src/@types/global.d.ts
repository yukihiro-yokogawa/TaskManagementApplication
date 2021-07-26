declare global {
  /**
   * Window関数の拡張.
   *
   * @interface Window
   */
  interface Window {
    accessToken: string | undefined;
    userId: string;
  }
}

export default global;
