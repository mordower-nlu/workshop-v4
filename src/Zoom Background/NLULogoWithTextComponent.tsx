/**
 * This function returns the NLU logo with full text against a white background.
 * Original viewbox viewBox="0 0 288 76"
 * 
 * 
 * @param xOffset 
 *  
 * 
 * 
 * @param yOffset 
 * @returns 
 */
export function NLULogoObject(xOffset:number,yOffset:number,scaleFactor:number) {

    return <g fill="white" fillRule="evenodd" transform={"translate("+xOffset+","+yOffset+") scale("+scaleFactor+","+scaleFactor+")"}>
    <rect fill="white" x={0} y={0} width={256} height={76}></rect>
    <path d="M223.553 25.166h11.3v-2.69h-8.325V8.452h-2.975zm-10.826-6.328l-2.575-6.798-2.62 6.798zM201.68 25.21l7.271-16.712h2.574l7.196 16.712h-3.4l-1.555-3.824h-7.245l-1.513 3.824zm-96.354 11.61c0-5.358 3.68-8.853 8.828-8.853 5.217-.093 8.899 3.398 8.899 8.757 0 5.22-3.682 8.71-8.899 8.806-5.148 0-8.828-3.491-8.828-8.71zm3.117-.187c0 3.564 2.289 6.206 5.734 6.206 3.47 0 5.758-2.642 5.758-6.206 0-3.331-2.288-5.976-5.758-5.976-3.445 0-5.734 2.645-5.734 5.976zm60.764-6.94c-1.3-1.228-3.046-1.724-4.79-1.724-3.093 0-6.16 1.606-6.16 5.051 0 5.972 7.93 3.87 7.93 7.529 0 1.535-1.557 2.289-2.93 2.289-1.319 0-2.57-.636-3.302-1.746l-2.245 2.17c1.371 1.628 3.4 2.267 5.476 2.267 3.282 0 6.116-1.747 6.116-5.332 0-5.95-7.933-4.036-7.933-7.39 0-1.534 1.372-2.148 2.741-2.148 1.156 0 2.287.427 2.923 1.324zm-77.54 15.411h11.299v-2.691h-8.324v-14.02h-2.975zm50.943-16.712h-2.975v10.48c0 1.655-1.459 3.824-4.318 3.824-2.855 0-4.41-2.169-4.41-3.824v-10.48h-2.973v10.575c0 4.038 3.562 6.561 7.383 6.561 3.823 0 7.293-2.523 7.293-6.56zm6.682 16.711h2.976v-16.71h-2.976zm88.987 19.913h1.982v-7.199l6.231-9.514h-2.383l-4.838 7.554-4.697-7.554h-2.525l6.23 9.514zm-8.353-16.713h-13.029v1.842h5.522v14.871h1.982v-14.87h5.525zM178.7 55.67h1.771c2.194 0 5.052 0 5.052-2.763 0-2.405-2.102-2.761-4.038-2.761H178.7zm-1.983 9.347V48.303h4.274c3.233 0 6.657.47 6.657 4.603 0 2.43-1.582 4.012-4.176 4.414l4.742 7.696h-2.432l-4.533-7.507H178.7v7.507zm33.377 0h1.983V48.303h-1.983zm-6.479-15.177c-1.228-1.439-2.81-1.959-4.673-1.959-2.928 0-5.69 1.604-5.69 4.816 0 2.784 1.797 3.821 4.157 4.602 2.971.99 4.364 1.344 4.364 3.397 0 1.91-1.936 2.904-3.634 2.904-1.442 0-2.856-.635-3.564-1.863l-1.702 1.391c1.135 1.677 3.213 2.312 5.148 2.312 3.02 0 5.876-1.556 5.876-4.884 0-3.28-2.405-4.13-5.003-4.957-2.668-.848-3.516-1.533-3.516-3.07 0-1.98 1.815-2.81 3.564-2.81 1.204 0 2.383.475 3.046 1.537zm-43.812 15.177h10.929v-1.84h-8.947v-5.95h7.955v-1.843h-7.955v-5.238h8.522v-1.842h-10.504zm-13.227 0h1.909l6.537-16.713h-2.1l-5.31 13.74-5.192-13.74h-2.243zm-13.165 0h1.983V48.303h-1.983zm-21.279 0h1.982v-13.88l9.724 13.88h2.505V48.303h-1.985v13.88l-9.725-13.88h-2.5zm-6.693-16.713h-1.983V58.36c0 2.692-1.506 5.239-4.836 5.239-3.327 0-5.022-2.547-5.022-5.239V48.303h-1.983v10.34c0 3.636 2.405 6.796 7.005 6.796 4.605 0 6.819-3.16 6.819-6.797zm55.715-31.566c0 3.564 2.29 6.209 5.736 6.209 3.47 0 5.758-2.645 5.758-6.209 0-3.33-2.289-5.972-5.758-5.972-3.445 0-5.736 2.641-5.736 5.972zm-3.113.19c0-5.357 3.68-8.852 8.825-8.852 5.217-.096 8.9 3.397 8.9 8.755 0 5.218-3.683 8.71-8.9 8.806-5.145 0-8.825-3.493-8.825-8.71zm23.792 8.284h2.974V12.394l8.312 12.817h3.772V8.5h-2.973v12.415L185.778 8.5h-3.943zm-59.302-6.372l-2.57-6.799-2.621 6.799zm-11.044 6.372l7.268-16.713h2.573l7.199 16.713h-3.399l-1.558-3.824h-7.246l-1.511 3.824zm37.742 0h2.972V8.5h-2.972zm-13.772 0h2.974V11.19h5.122V8.5h-13.218v2.692h5.122zm-43.816 0V8.5h3.942l8.142 12.415V8.5h2.975v16.71h-3.776l-8.308-12.816v12.817z" fill="#7c878e"/>
    <path fill="#326295" d="M22.052 47.332l15.953-9.336 15.952 9.336z"/>
    <path fill="#a9b8d4" d="M38.005 19.704v18.292l-15.953 9.336z"/>
    <path fill="#547bad" d="M53.957 47.332l-15.952-9.336V19.704z"/>
    <path d="M38.003 8.379l25.962 44.566H12.33zM38 7.015L11.152 53.628h54z" fill="#a0a9b2"/>
    <path d="M37.995 73.955C18.169 73.955 2.04 57.825 2.04 38c0-19.822 16.128-35.951 35.954-35.951 19.825 0 35.95 16.129 35.95 35.95 0 19.827-16.125 35.956-35.95 35.956M0 38c0 20.955 17.047 38 38.002 38C58.953 76 76 58.955 76 38 76 17.049 58.953 0 38.002 0 17.047.002 0 17.05 0 38.002z" fill="#c2c7cc"/>
    <path d="M66.558 55.446c-5.88 9.608-16.474 16.018-28.564 16.018-12.091 0-22.684-6.41-28.568-16.018zM38.628 4.539c18.19.338 32.832 15.19 32.832 33.46a33.32 33.32 0 01-4.168 16.19zM4.525 37.999C4.525 19.706 19.2 4.845 37.42 4.54L8.724 54.24A33.324 33.324 0 014.525 38z" fill="#326295"/>
    <path d="M21.48 59.855c-2.063-1.812-3.071-2.472-5.814-2.739-1.006-.101-2.26-.17-2.348.035-.075.172.757 1.099 1.505 1.782 2.035 1.858 3.237 2.157 5.97 2.468 1.06.12 2.447.16 2.447.16s-.959-1-1.76-1.706m-7.85-15.09c1.547-2.268 2.076-3.433 2.009-6.188-.024-1.01-.102-2.183-.32-2.243-.143-.04-.988.857-1.575 1.683-1.6 2.247-1.756 3.502-1.733 6.25.008.625.05 1.355.091 1.855.038.46.16 1.311.17 1.351l.14-.032s-.083-.821.239-1.35c.296-.381.672-.88.979-1.326m-5.246 2.81c-.127.138.336 1.291.807 2.19.365.703.739 1.287 1.104 1.753l1.473-2.552c-.336-.2-.735-.414-1.164-.619-.916-.436-2.065-.935-2.22-.772m15.04 16.047c-.983.253-2.182.614-2.194.838-.011.187 1.086.771 2.021 1.16 2.55 1.052 3.78.921 6.454.278 1.039-.252 2.355-.69 2.355-.69s-1.244-.609-2.237-.997c-2.56-1-3.731-1.274-6.4-.589M8.847 38.375c-.71-.725-1.622-1.582-1.822-1.482-.167.082-.13 1.328.005 2.332.364 2.734 1.094 3.733 2.986 5.725.736.776 1.775 1.697 1.775 1.697s-.094-1.382-.254-2.436c-.413-2.715-.761-3.869-2.69-5.836m23.163 25.81a31.127 31.127 0 00-.66-1.511c-1.19-2.476-1.933-3.516-4.353-4.835-.892-.483-1.945-1.003-2.103-.843-.107.105.249 1.284.668 2.209 1.148 2.504 2.158 3.27 4.55 4.62.543.31 1.195.634 1.65.85.416.195 1.215.516 1.255.529l.043-.138s-.754-.338-1.05-.881m28.672-27.852c-.216.06-.294 1.233-.32 2.243-.069 2.756.46 3.92 2.01 6.188.306.447.684.945.978 1.326.323.529.238 1.35.238 1.35l.142.033c.01-.04.13-.892.17-1.352.04-.5.084-1.23.09-1.854.023-2.748-.133-4.003-1.731-6.25-.587-.827-1.434-1.724-1.577-1.684m4.715 12.014c-.425.203-.797.4-1.13.599l1.468 2.543c.365-.469.712-1.024 1.077-1.724.469-.899.934-2.052.807-2.19-.155-.164-1.308.336-2.222.772M10.542 37.185s.385-1.33.594-2.38c.54-2.69.605-3.894-.532-6.402-.42-.921-.984-2.042-1.206-2.016-.187.021-.572 1.204-.79 2.194-.594 2.693-.253 3.883.846 6.402.427.981 1.088 2.202 1.088 2.202m49.79 19.93c-2.74.268-3.748.927-5.812 2.74-.799.704-1.76 1.705-1.76 1.705s1.388-.04 2.45-.16c2.73-.31 3.935-.61 5.969-2.468.746-.683 1.578-1.61 1.504-1.782-.09-.205-1.342-.136-2.35-.034m-14.442 6.71c2.392-1.352 3.4-2.117 4.548-4.622.42-.924.774-2.103.668-2.208-.158-.16-1.213.36-2.103.843-2.42 1.318-3.16 2.359-4.352 4.835-.234.49-.478 1.064-.66 1.51-.295.544-1.05.882-1.05.882l.043.138c.04-.013.839-.334 1.253-.529a27.589 27.589 0 001.653-.85m6.686-.203c-2.668-.685-3.838-.41-6.397.588-.996.39-2.24.998-2.24.998s1.317.437 2.356.69c2.672.643 3.905.773 6.453-.278.936-.389 2.033-.974 2.024-1.16-.013-.224-1.215-.586-2.196-.838m16.4-26.73c-.2-.1-1.114.758-1.822 1.483-1.927 1.967-2.276 3.12-2.69 5.836-.16 1.053-.254 2.435-.254 2.435s1.037-.92 1.772-1.696c1.895-1.993 2.623-2.992 2.986-5.725.135-1.005.177-2.25.008-2.332M10.71 38.124l.146.02s.201-.801.684-1.188c.409-.256.934-.597 1.373-.912 2.23-1.604 3.128-2.517 4.006-5.125.325-.963.652-2.091.466-2.22-.12-.085-1.222.469-2.058 1.044-2.27 1.564-2.846 2.69-3.763 5.282a27.981 27.981 0 00-.55 1.773 30.93 30.93 0 00-.304 1.326m45.578-19.751c.834.665 1.985 1.439 1.985 1.439s-.28-1.36-.585-2.385c-.779-2.636-1.28-3.767-3.465-5.448-.803-.619-1.858-1.277-2.018-1.171-.185.12.102 1.342.374 2.318.74 2.653 1.564 3.53 3.709 5.247m-2.223 3.858c-.13.185.565 1.133 1.197 1.925 1.718 2.154 2.871 2.707 5.514 3.448.525.145 1.134.285 1.606.387.585.2 1.048.882 1.048.882l.13-.067c-.02-.036-.475-.768-.739-1.144a27.93 27.93 0 00-1.122-1.477c-1.75-2.121-2.677-2.984-5.346-3.676-.98-.256-2.205-.4-2.288-.278m9.334 5.634s.201-1.371.269-2.443c.167-2.74.083-3.976-1.395-6.304-.543-.856-1.312-1.835-1.495-1.79-.22.05-.365 1.297-.443 2.307-.211 2.747.261 3.853 1.69 6.2a36.08 36.08 0 001.374 2.03m2.061 9.32s.661-1.22 1.088-2.202c1.095-2.519 1.44-3.709.847-6.402-.22-.99-.605-2.173-.792-2.194-.224-.026-.787 1.095-1.205 2.016-1.14 2.508-1.073 3.712-.534 6.402.211 1.05.596 2.38.596 2.38m-4.786-7.442c-.835-.576-1.936-1.13-2.058-1.045-.185.13.144 1.257.467 2.22.877 2.608 1.771 3.522 4.001 5.126a30.9 30.9 0 001.379.912c.481.387.683 1.188.683 1.188l.143-.02a27.53 27.53 0 00-.301-1.326 30.465 30.465 0 00-.549-1.773c-.919-2.592-1.496-3.718-3.765-5.282m-8.112 29.19a29.155 29.155 0 00-.103 1.648c-.093.61-.687 1.184-.687 1.184l.09.117c.032-.028.673-.602.998-.927.352-.358.854-.886 1.259-1.36 1.35-1.579 2.072-2.574 2.437-4.15H53.29c-.41.971-.58 2.008-.727 3.489m-39.96-31.069s.82-1.12 1.375-2.03c1.428-2.347 1.9-3.453 1.69-6.2-.08-1.01-.226-2.257-.444-2.306-.183-.046-.95.933-1.495 1.789-1.478 2.328-1.562 3.563-1.39 6.304.063 1.072.264 2.443.264 2.443m36.756-8.754c2.35 1.436 3.624 1.56 6.361 1.353.541-.042 1.163-.12 1.64-.185.618-.015 1.286.468 1.286.468l.098-.105c-.029-.03-.708-.561-1.082-.823a29.847 29.847 0 00-1.56-1.004c-2.37-1.393-3.537-1.89-6.281-1.628-1.009.096-2.207.382-2.247.525-.058.214.919.872 1.785 1.399m-36.176 8.551a27.73 27.73 0 00-.741 1.145l.132.067s.462-.683 1.047-.883a28.969 28.969 0 001.603-.387c2.647-.74 3.798-1.293 5.518-3.447.633-.792 1.326-1.74 1.197-1.926-.085-.121-1.311.022-2.29.278-2.668.692-3.595 1.555-5.344 3.677-.397.48-.833 1.068-1.122 1.476m10.255 31.272c-.145-1.48-.312-2.517-.726-3.489h-3.266c.367 1.577 1.09 2.572 2.438 4.15.405.475.908 1.003 1.26 1.361.322.325.965.9.997.926l.09-.116s-.595-.574-.687-1.184a26.164 26.164 0 00-.106-1.648m-.012-45.808c.268-.975.559-2.197.372-2.317-.158-.106-1.213.552-2.018 1.171-2.185 1.68-2.685 2.812-3.466 5.447-.303 1.027-.583 2.385-.583 2.385s1.15-.773 1.986-1.438c2.143-1.717 2.966-2.594 3.709-5.248m-6.069 7.622s.669-.483 1.286-.469c.478.066 1.099.144 1.64.186 2.74.207 4.01.083 6.361-1.354.867-.526 1.844-1.184 1.786-1.398-.039-.144-1.24-.429-2.247-.525-2.747-.262-3.913.234-6.281 1.627a28.99 28.99 0 00-1.559 1.005c-.377.261-1.055.794-1.086.823l.1.105" fill="#879ec4"/>
 </g>;
}