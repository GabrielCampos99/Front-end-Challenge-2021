import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeToggle } from "../store/toggleSlice";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Modal = (props) => {
  const obj = useSelector((state) => state.pessoa);
  console.log(obj);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const closeModal = () => {
    return history.push("/");
  };

  let pessoaEditada = obj.find((pessoaObj) => params.id === pessoaObj.id);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}

          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{`${pessoaEditada.title} ${pessoaEditada.first} ${pessoaEditada.last}`}</h3>
              <div className="flex ml- -space-x-1 overflow-hidden ">
                <img
                  className="inline-block h-30 w-30 rounded-full ring-6 ring-white"
                  src={pessoaEditada.large}
                  alt=""
                />
              </div>

              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModal()}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p class="text-lg font-semibold">Genero:</p>
              <div class="text-gray-500">{pessoaEditada.genero}</div>

              <p class="text-lg font-semibold">Nascimento:</p>
              <div class="text-gray-500">{`${pessoaEditada.nascimento} | Idade:${pessoaEditada.idade}`}</div>

              <p class="text-lg font-semibold">Endereço:</p>
              <div class="text-gray-500">{`${pessoaEditada.country}, ${pessoaEditada.state}, ${pessoaEditada.city},${pessoaEditada.nameStreet} ${pessoaEditada.numberStreet} `}</div>

              <p class="text-lg font-semibold">E-mail:</p>
              <div class="text-gray-500">{pessoaEditada.email}</div>

              <p class="text-lg font-semibold">ID:</p>
              <div class="text-gray-500">{pessoaEditada.id}</div>

              <p class="text-lg font-semibold">Phone:</p>
              <div class="text-gray-500">{pessoaEditada.phone}</div>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModal()}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default Modal;
