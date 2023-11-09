import { PropsWithChildren } from "react";

export type Props = {
  exibirMenu: boolean;
  setExibirMenu: (x: boolean) => void;
};

export default function Header(props: Props) {
  const { exibirMenu, setExibirMenu } = props;

  return (
    <div className="w-full bg-cyan-500 h-20 flex-col text-center p-3">
      <div>
        <button
          className=""
          onClick={() => {
            setExibirMenu(!exibirMenu);
          }}
        >
          Toggle div
        </button>
      </div>
      <p className="font-semibold text-2xl text-white ">Minhas Finanças</p>
      <p className="font-semibold text-white text-sm/[17px]">
        A solução para o seu controle finaceiro pessoal
      </p>
    </div>
  );
}
