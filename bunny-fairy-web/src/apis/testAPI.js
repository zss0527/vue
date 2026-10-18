import http from "@/utils/http.js";

export function getCategory() {
    return http.get('/api/profile',
        {
            headers: {
                Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoibGFycnkiLCJleHAiOjE3OTI0MDA1NDcsIm5iZiI6MTc5MjMxNDE0NywiaWF0IjoxNzkyMzE0MTQ3fQ.ma3-0XTAvXeUVzRWpiDC9PZBH2HafoWaVpADZOYX2N8"
            }
        }
    //     {
    //     username: "test",
    //     password: "123456"
    // }
    )
}