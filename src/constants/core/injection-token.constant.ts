import { InjectionToken } from "@angular/core";
import { StorageService } from "@services/implementations/core/storage.service";
import { IAuthorizationService } from "@services/interfaces/core/authorization-service.interface";
import { ISignUpService } from "@services/interfaces/core/sign-up-service.interface";
import { IUpgradeAccountService } from "@services/interfaces/core/upgrade-account-service.interface";
import { IUserProfileService } from "@services/interfaces/user-profile/user-profile-service.interface";

export const AUTHORIZATION_SERVICE_INJECTOR = new InjectionToken<IAuthorizationService>('AUTHORIZATION_SERVICE_INJECTOR');
export const SIGN_UP_SERVICE_INJECTOR = new InjectionToken<ISignUpService>('SIGN_UP_SERVICE_INJECTOR');
export const UPGRADE_ACCOUNT_SERVICE_INJECTOR = new InjectionToken<IUpgradeAccountService>('UPGRADE_ACCOUNT_SERVICE_INJECTOR');
export const USER_PROFILE_SERVICE_INJECTOR = new InjectionToken<IUserProfileService>('USER_PROFILE_SERVICE_INJECTOR');
export const CURRENT_USER_PROFILE_SERVICE_INJECTOR = new InjectionToken<IUserProfileService>('CURRENT_USER_PROFILE_SERVICE_INJECTOR');

export const SESSION_STORAGE_SERVICE_INJECTOR = new InjectionToken<StorageService>('SESSION_STORAGE_SERVICE_INJECTOR');
export const LOCAL_STORAGE_SERVICE_INJECTOR = new InjectionToken<StorageService>('LOCAL_STORAGE_SERVICE_INJECTOR');
