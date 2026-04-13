// Global type declarations for API modules
import type { API as APINamespace } from '@/types';

declare global {
  namespace API {
    export type LoginParams = APINamespace.LoginParams;
    export type CurrentUser = APINamespace.CurrentUser;
    export type RuleListItem = APINamespace.RuleListItem;
    export type PageParams = APINamespace.PageParams;
    export type GET_API_CURRENT_USER_QUERY =
      APINamespace.GET_API_CURRENT_USER_QUERY;
    export type GET_API_CURRENT_USER_PAYLOAD =
      APINamespace.GET_API_CURRENT_USER_PAYLOAD;
    export type GET_API_CURRENT_USER_RES =
      APINamespace.GET_API_CURRENT_USER_RES;
    export type GET_API_RULE_QUERY = APINamespace.GET_API_RULE_QUERY;
    export type GET_API_RULE_PAYLOAD = APINamespace.GET_API_RULE_PAYLOAD;
    export type GET_API_RULE_RES = APINamespace.GET_API_RULE_RES;
    export type POST_API_LOGIN_OUT_LOGIN_QUERY =
      APINamespace.POST_API_LOGIN_OUT_LOGIN_QUERY;
    export type POST_API_LOGIN_OUT_LOGIN_PAYLOAD =
      APINamespace.POST_API_LOGIN_OUT_LOGIN_PAYLOAD;
    export type POST_API_LOGIN_OUT_LOGIN_RES =
      APINamespace.POST_API_LOGIN_OUT_LOGIN_RES;
    export type POST_API_LOGIN_ACCOUNT_QUERY =
      APINamespace.POST_API_LOGIN_ACCOUNT_QUERY;
    export type POST_API_LOGIN_ACCOUNT_PAYLOAD =
      APINamespace.POST_API_LOGIN_ACCOUNT_PAYLOAD;
    export type POST_API_LOGIN_ACCOUNT_RES =
      APINamespace.POST_API_LOGIN_ACCOUNT_RES;
  }
}
