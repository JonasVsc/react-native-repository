import React from "react";
import TextoCentral from "../components/TextoCentral";

export default (props) => {
    props.navigation.navigate("TelaB")
    return (
        <TextoCentral corFundo='blue'>
            Tela A
        </TextoCentral>
    )
}