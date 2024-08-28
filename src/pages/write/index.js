import {useEffect, useState} from "react";
import {getPosts} from "../../api/getPosts";
import styled from "styled-components";


function WritePage() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await getPosts();
                setData(posts)
                console.log(posts);  // 혹은 상태를 업데이트하거나 다른 작업을 수행할 수 있습니다.
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };

        fetchPosts();
    }, []);


    return (
        <>
            <h1>글쓰는 페이지</h1>
            <WrapperBox>
                {data.map((item)=>(
                    <Wrapper>
                        <h1>{item.id}</h1>
                        {item.title}
                    </Wrapper>
                ))}
            </WrapperBox>
        </>

    );
}

export default WritePage;

const WrapperBox = styled.div`
    overflow-y: scroll;
    //-ms-overflow-style: none;
    //scrollbar-width: none;
    
`

const Wrapper = styled.div`
    margin: 10px;
    border-radius: 20px;
    border: 1px solid red;
    padding: 20px;
`