
import { authService } from "@/services/auth/auth";
import { IAuthContext } from "@/types/AuthContext";
import { IUser } from "@/types/User";
import { DICEBEAR_API } from "@/utils/endpoints";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [loadingAPI, setLoadingAPI] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setIsAuthenticated(true);
      setUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = async (cccd_id: string, password: string) => {
    setLoadingAPI(true);
    try {
      const { data } = await authService.login(cccd_id, password);
      if (data.success) {
        const userWithAvatar = {
          ...data.payload.user,
          image: `${DICEBEAR_API}/${data.payload.user.name}`
        };
        localStorage.setItem("token", data.payload.accessToken);
        localStorage.setItem("user", JSON.stringify(userWithAvatar));
        setUser(userWithAvatar);
        setIsAuthenticated(true);
        toast.success("Login Successful");
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
      return false;
    } finally {
      setLoadingAPI(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser({} as IUser);
  };

  const contextValue: IAuthContext = {
    isAuthenticated,
    loading,
    loadingAPI,
    login,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
