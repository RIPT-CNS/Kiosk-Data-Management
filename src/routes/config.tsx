import SchoolCalendarData from "@/pages/SchoolCalendarData";
import { IRouteConfig } from "@/types/RouteConfig";
import {
  AreaChartIcon as ChartArea,
  Database,
  Frame
} from "lucide-react";
import { lazy } from "react";

const Landing = lazy(() => import("@/pages/Landing"));
const Login = lazy(() => import("@/pages/Login"));
const IdentificationData = lazy(() => import("@/pages/IdentificationData"));
const InstitueCalendarData = lazy(() => import("@/pages/InstitueCalendarData"));
const EventData = lazy(() => import("@/pages/EventData"));
const UserBehaviour = lazy(() => import("@/pages/UserBehaviour"));
const AppointmentsRequests = lazy(() => import("@/pages/AppointmentsRequests"));

export const routeConfig: IRouteConfig = {
  root: {
    path: "/",
    element: Landing,
  },
  auth: {
    path: "/auth",
    children: {
      login: {
        path: "/auth/login",
        element: Login,
        title: "Login",
      },
    },
  },
  dashboard: {
    path: "/dashboard",
    title: "Dashboard",
    children: {
      dataManagement: {
        path: "#data-management",
        title: "Quản lý dữ liệu",
        icon: Database,
        children: {
          identificationData: {
            path: "/dashboard/identification-data",
            element: IdentificationData,
            title: "Nhận diện",
          },
          instituteCalendarData: {
            path: "/dashboard/institute-calendar-data",
            element: InstitueCalendarData,
            title: "Lịch công tác viện",
          },
          schoolCalendarData: {
            path: "/dashboard/school-calendar-data",
            element: SchoolCalendarData,
            title: "Lịch đào tạo",
          },
          eventData: {
            path: "/dashboard/event-data",
            element: EventData,
            title: "Sự kiện",
          },

        },
      },
      dataAnalysis: {
        path: "#data-analysis",
        title: "Thống kê dữ liệu",
        icon: ChartArea,
        children: {
          userBehaviour: {
            path: "/dashboard/user-behaviour",
            element: UserBehaviour,
            title: "Hành vi người dùng",
          },
          appointmentRequests: {
            path: "/dashboard/appointment-requests",
            element: AppointmentsRequests,
            title: "Yêu cầu lịch hẹn",
          },
        },
      },
    },
  },
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
  ],
};