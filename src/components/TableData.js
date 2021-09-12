import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Route, Link } from "react-router-dom";
//import { adicionarPessoa } from "../store/personDataSlice";
import { openToggle } from "../store/toggleSlice";
import Modal from "./Modal.js";

/*
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },

  // More people...
];*/

export default function Example(props) {
  const people = useSelector((state) => state.pessoa);
  const showCart = useSelector((state) => state.toggle.toggle);
  const dispatch = useDispatch();

  const toggleHandle = (e) => {
    return dispatch(openToggle());
  };

  return (
    <div className="container justify-center m-auto ">
      <h1 className="text-center font-serif text-4xl bold text-indigo-700	mb-4">
        Lorem ipsum dolor sit amet ...
      </h1>
      <p className="text-2xl max-w-4xl text-center	m-auto mb-8	">
        Vivamus blandit, augue non blandit iaculis, nunc enim interdum lorem, a
        vulputate justo dui quis ex. Fusce tristique magna a ante ultrices, ac
        consectetur justo euismod.
      </p>
      <div className="flex flex-col ">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gênero
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nascimento
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.thumbnail}
                              alt="oseise"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {`${person.title} ${person.first} ${person.last}`}
                            </div>
                            <div className="text-sm text-gray-500"></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900"></div>
                        <div className="text-sm text-gray-500">
                          {person.genero}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-4 inline-flex text-xs leading-5 font-semibold   text-green-800">
                          {person.nascimento}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          to={`/dashboard/${person.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={toggleHandle}
                        >
                          Abrir modal
                        </Link>
                        {showCart && (
                          <Route exact path="/dashboard/:id">
                            <Modal nome={person.first} />
                          </Route>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Route exact path="/dashboard/:id" component={Modal} />

      {showCart && <Route exact path="/dashboard/:id" component={Modal} />}
    </div>
  );
}
