import { useState } from "react";

const MyComponentFunc = ({ name, children }) => {
    //상태변수와 setter 함수 선언하기
    const [value, setValue] = useState(0);
        
    return (
        <div>
            <h2>함수형 컴포넌트</h2>
            <h3>Hello! {name}</h3>
            {children}
        </div>
    );
};

export default MyComponentFunc;