import { useDispatch } from "react-redux";
import { fetchData } from "../api/index";

import { adicionarPessoa } from "../store/personDataSlice";

const Button = (params) => {
  const dispatch = useDispatch();

  const handlePessoaData = () => {
    const DataFetched = async () => {
      const data = await fetchData();

      console.log(data);
      let {
        gender,
        dob: { date, age },
        email,
        id,
        phone,
        location: { city, country, state, street },
        name: { title, first, last },
        picture: { large, medium, thumbnail },
      } = data[0];

      let PessoasDados = {
        date,
        age,
        gender,
        email,
        id,
        phone,
        title,
        first,
        last,
        city,
        country,
        state,
        street,
        large,
        medium,
        thumbnail,
      };
      dispatch(adicionarPessoa(PessoasDados));
      console.log(PessoasDados);
    };

    DataFetched();
  };
  return (
    <div className="container  m-auto mt-6		">
      <div
        className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center mx-auto cursor-pointer"
        onClick={handlePessoaData}
      >
        Adicionar usuário
      </div>
    </div>
  );
};

export default Button;
