export const DICEBEAR_API = "https://api.dicebear.com/9.x/thumbs/svg?";
export const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
export const BACKEND_API = import.meta.env.VITE_BACKEND_API;

export const LOGIN_API = BACKEND_API + "/auth/login";

export const GET_INSTITUE_CALENDAR_DATA_IP =
  BACKEND_API + "/institude-calendar/get";
export const UPDATE_INSTITUE_CALENDAR_DATA_IP =
  BACKEND_API + "/institude-calendar/post";

export const GET_CLASS_CALENDAR_DATA_IP = BACKEND_API + "/class-calendar/get";
export const GET_CLASS_CALENDAR_DATA_BY_DAY_IP =
  BACKEND_API + "/class-calendar/get/by-day";
export const GET_CLASS_CALENDAR_DATA_BY_ROLE =
  BACKEND_API + "/class-calendar/get/by-role";
export const UPDATE_CLASS_CALENDAR_DATA_IP =
  BACKEND_API + "/class-calendar/post";

export const GET_TEACHER_CALENDAR_DATA_IP =
  BACKEND_API + "/teacher-calendar/get";

export const GET_ROLE_STATISTICS_IP = BACKEND_API + "/statistics/roles";