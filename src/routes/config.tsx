import SchoolCalendarData from "@/pages/SchoolCalendarData";
import { IRouteConfig } from "@/types/RouteConfig";
import {
  AreaChartIcon as ChartArea,
  Database,
  Frame,
  IdCard
} from "lucide-react";
import { lazy } from "react";

const Landing = lazy(() => import("@/pages/Landing"));
const Login = lazy(() => import("@/pages/Login"));
const IdentificationData = lazy(() => import("@/pages/IdentificationData"));
const InstitueCalendarData = lazy(() => import("@/pages/InstitueCalendarData"));
const EventData = lazy(() => import("@/pages/EventData"));
const UserBehaviourStatistics = lazy(() => import("@/pages/UserBehaviourStatistics"));
const AppointmentsRequestStatistics = lazy(() => import("@/pages/AppointmentsRequestStatistics"));

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
          userBehaviourStatistics: {
            path: "/dashboard/user-behaviour",
            element: UserBehaviourStatistics,
            title: "Hành vi người dùng",
          },
          appointmentRequestsStatistics: {
            path: "/dashboard/appointment-requests",
            element: AppointmentsRequestStatistics,
            title: "Yêu cầu lịch hẹn",
          },
        },
      },
    },
  },
  projects: [
    {
      name: "Xác thực dữ liệu",
      url: "#",
      icon: IdCard,
    },
  ],
};