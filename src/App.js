import styled from "styled-components";

//back-tik 사이에 들어가는 모든 문법은 css 여야함
//styled 뒤에는 html의 태그종류만 입력가능

// 재사용 가능한 style 컴포넌트 만들기
const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;

//이전 Box 스타일 상속
const Circle = styled(Box)`
  border-radius: 50px;
`;


const Text = styled.span`
    color : white;
`;


function App() {
    return (
        <Father>
            <Box bgColor="teal">
                <Text>Hello</Text>
            </Box>
            <Circle bgColor="tomato"/>
        </Father>
    );
}

export default App;
