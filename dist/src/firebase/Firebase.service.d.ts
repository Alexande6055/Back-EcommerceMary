export declare class FirebaseService {
    onModuleInit(): void;
    verifyIdToken(idToken: string): Promise<import("firebase-admin/lib/auth/token-verifier").DecodedIdToken>;
}
