import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <div id={"header"}>
                <div id={"names-sign"}>
                    <div>
                        Бакин&nbsp;Артем,&nbsp;P3213<br/>Купперштейн&nbsp;Дмитрий,&nbsp;P3213</div>
                    </div>
                <div id={"lab-sign"}>
                    <div>
                        Лабораторная №4<br/><span>по Веб-программированию</span>
                    </div>
                </div>
                <div id={"var-sign"}>
                    <div>
                        Вариант: 287
                    </div>
                </div>
            </div>
        )
    }
}