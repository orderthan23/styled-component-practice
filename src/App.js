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

// 버튼 타입으로 만든 스타일을 A 태그의 스타일로 사용하고 싶을 때 AS 키워드를 사용
const Btn = styled.button`
  color : white;
  background-color : tomato;
  border : 0;
  border-radius : 15px;
`;

// styled component로 attr(속성) 정의하기
const Input = styled.input.attrs({required : true, minLength : 10})`
  background-color : tomato;
`;

function App() {
    return (
        <Father as="header">
            {/* <Btn>Log in</Btn>
            <Btn as="a" href="http://www.naver.com">Log in</Btn> */}
            {/* <Box bgColor="teal">
                <Text>Hello</Text>
            </Box>
            <Circle bgColor="tomato"/> */}
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
        </Father>
    );
}

export default App;
