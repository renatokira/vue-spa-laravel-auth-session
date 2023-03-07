import { defineStore } from "pinia"
import axios from "axios";
import Swal from "sweetalert";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: [],
        authAutenticated: false
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        autenticated: (state) => state.authAutenticated,
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },

        async handleLogin(data) {

            this.authErrors = [];

            if (await this.isLoggedIn()) {
                this.router.push('/');
                return;
            }


            try {
                await this.getToken();

                await axios.post("/login", {
                    email: data.email,
                    password: data.password,
                });

                this.authAutenticated = true;
                this.router.push("/");


            } catch (error) {
                if (error.response?.status === 422) {
                    this.authErrors = error.response.data.errors;
                } else if (error?.response?.status) {
                    this.showErrorAlert(error?.response?.status);
                } else if (error?.message) {
                    this.showErrorAlert(error?.message);
                } else {
                    this.showErrorAlert(error.response?.status);
                }
            }

        },

        async handleLogout() {
            try {
                await axios.post("/logout");
                this.removeAuthentication();
                this.router.push("/login");

            } catch (error) {
                if (error.response?.status === 401 || error.response?.status === 419) {
                    this.removeAuthentication();
                    this.router.push("/login");
                }
            }
        },

        async getAuthUser() {
            try {
                const data = await axios.get("/api/user");
                this.authUser = data.data;
                this.authAutenticated = true
            } catch (error) {
                if (error.response?.status === 401 || error.response?.status === 419) {
                    this.removeAuthentication();
                }
            }
        },

        showErrorAlert(status) {
            Swal({
                title: status,
                icon: 'error'
            });
        },

        removeAuthentication() {
            this.authAutenticated = false
            this.authUser = null;
        },

        async isLoggedIn() {
            await this.getAuthUser();
            return this.authAutenticated;
        }

    }
});