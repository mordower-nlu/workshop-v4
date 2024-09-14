import { ZoomBGImage } from "../Zoom Background/ZoomBGImage";
import SampleImage from "../assets/svg/zoombgsample.svg";
/*
 * 
 * 
 * 
 * 
 */
export function ZoomTestView(){

    return <>
        <p>Zoom Test Page</p>
        <hr/>
        <p>
            Automated Version:<br/>
            <ZoomBGImage/>
        </p>
        <hr/>
        <p>
            Sample:<br/>
            <img src={SampleImage}/>

        </p>
    </>

}