import svgPaths from "./svg-qrdfjzut8e";

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25.684px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Segoe_UI_Emoji:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">9:41</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[11.992px] relative shrink-0 w-[15.996px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9961 11.9922">
        <g clipPath="url(#clip0_4_152)" id="Icon">
          <path d={svgPaths.p1eba7de0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3972c800} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_2" />
          <path d={svgPaths.p1ef1df00} fill="var(--fill-0, white)" fillOpacity="0.4" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_4_152">
            <rect fill="white" height="11.9922" width="15.9961" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="flex-[1_0_0] h-[15.996px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[37.5%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9971 3.99902">
            <path d="M0 0H11.9971V3.99902H0V0Z" fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[43.75%_6.25%_43.75%_87.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M1 0H0V2H1V0Z" fill="var(--fill-0, white)" id="Vector" opacity="0.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-[35.977px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.984px] items-center relative size-full">
        <Icon />
        <Icon1 />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="bg-[#1d9e75] h-[43.984px] relative shrink-0 w-[390px]" data-name="StatusBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[8px] px-[23.984px] relative size-full">
        <Text />
        <Container1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[35.996px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Segoe_UI_Emoji:Medium',sans-serif] leading-[36px] left-0 not-italic text-[#1a1a1a] text-[30px] top-[-3.5px] whitespace-nowrap">BusTrack CR</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[23.984px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Segoe_UI_Emoji:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6b7280] text-[16px] top-[-1.75px] whitespace-nowrap">Rastreo de buses en tiempo real</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[67.969px] relative shrink-0 w-[342.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.988px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI_Emoji:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a1a] text-[14px]">Cédula</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[50.469px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Segoe_UI_Emoji:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">Ingrese su cédula</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.25px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.988px] h-[78.457px] items-start left-0 top-0 w-[342.031px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI_Emoji:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a1a] text-[14px]">Contraseña</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="h-[50.469px] relative rounded-[10px] shrink-0 w-full" data-name="Password Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Segoe_UI_Emoji:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">Ingrese su contraseña</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.25px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.988px] h-[78.457px] items-start left-0 top-[94.45px] w-[342.031px]" data-name="Container">
      <Label1 />
      <PasswordInput />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1d9e75] h-[47.969px] left-0 rounded-[10px] top-[188.91px] w-[342.031px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Segoe_UI_Emoji:Medium',sans-serif] leading-[24px] left-[171.04px] not-italic text-[16px] text-center text-white top-[10.24px] whitespace-nowrap">Iniciar sesión</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[256.62px] w-[342.031px]" data-name="Button">
      <p className="flex-[1_0_0] font-['Segoe_UI_Emoji:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1d9e75] text-[14px] text-center">¿No tiene cuenta? Regístrese aquí</p>
    </div>
  );
}

function Form() {
  return (
    <div className="h-[276.855px] relative shrink-0 w-[342.031px]" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
        <Container5 />
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[800_0_0] min-h-px min-w-px relative w-[390px]" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31.992px] items-start justify-center pb-[211.602px] pl-[23.984px] pr-[24px] pt-[211.582px] relative size-full">
          <Container3 />
          <Form />
        </div>
      </div>
    </div>
  );
}

function LoginScreen() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[843.984px] items-start relative shrink-0 w-full" data-name="LoginScreen">
      <StatusBar />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white flex-[843.984_0_0] min-h-px min-w-px relative w-[390px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <LoginScreen />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[843.984px] items-start overflow-clip relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="App">
      <Container />
    </div>
  );
}

function Body() {
  return (
    <div className="h-[1590px] relative shrink-0 w-full" data-name="Body">
      <div className="content-stretch flex flex-col items-start px-[1234.375px] relative size-full">
        <App />
      </div>
    </div>
  );
}

export default function DesignSpecificationPrompt() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pr-[-0.75px] relative size-full" data-name="Design Specification Prompt">
      <Body />
    </div>
  );
}