import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Pages from "../s2-homeworks/hw05/Pages";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Pages">
                <Pages/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;