import { Injectable } from '@angular/core';

interface StoredUser {
    fullName: string;
    email: string;
    password: string;
    bio?: string;
    joinDate?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly USERS_KEY = 'knowledgehub_users';
    private readonly TOKEN_KEY = 'currentUserToken';

    isAuthenticated(): boolean {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    login(email: string, password: string): boolean {
        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            const token = btoa(`${email}:${Date.now()}`);
            localStorage.setItem(this.TOKEN_KEY, token);
            return true;
        }
        return false;
    }

    signUp(fullName: string, email: string, password: string): boolean {
        const users = this.getUsers();
        if (users.some(u => u.email === email)) {
            return false;
        }
        users.push({ fullName, email, password, joinDate: new Date().toISOString() });
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
        const token = btoa(`${email}:${Date.now()}`);
        localStorage.setItem(this.TOKEN_KEY, token);
        return true;
    }

    getCurrentUser(): StoredUser | null {
        const token = localStorage.getItem(this.TOKEN_KEY);
        if (!token) return null;
        try {
            const email = atob(token).split(':')[0];
            return this.getUsers().find(u => u.email === email) ?? null;
        } catch {
            return null;
        }
    }

    updateUser(partial: Partial<StoredUser>): void {
        const token = localStorage.getItem(this.TOKEN_KEY);
        if (!token) return;
        try {
            const email = atob(token).split(':')[0];
            const users = this.getUsers();
            const idx = users.findIndex(u => u.email === email);
            if (idx === -1) return;
            users[idx] = { ...users[idx], ...partial, email: users[idx].email };
            localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
        } catch {
            // token decode failed
        }
    }

    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    private getUsers(): StoredUser[] {
        const raw = localStorage.getItem(this.USERS_KEY);
        try {
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    }
}
