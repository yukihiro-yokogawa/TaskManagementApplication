export type KeycloakState = {
  Keycloak: Keycloak.KeycloakInstance | null;
  Authenticated: boolean;
  UserId: string;
  MailAddress: string;
};
