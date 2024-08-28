import instance from "./instance";

export const getPosts = async()=>{
    try {
        const request = await instance.get('/posts');
        return request.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;  // 에러를 다시 던져서 호출하는 쪽에서 처리할 수 있게 합니다.
    }

}