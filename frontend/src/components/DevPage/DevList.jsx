import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import Modal from "../modals/Modal";

const DevList = () => {
  const [devs, setDevs] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedDev, setSelectedDev] = useState(null);
  const [editedDev, setEditedDev] = useState({
    nome: "",
    sexo: "",
    idade: "",
    data_nascimento: "",
    hobby: "",
    nivel_id: "",
  });

  useEffect(() => {
    fetchDevs();
  }, []);

  const fetchDevs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/dev");
      setDevs(response.data);
    } catch (err) {
      console.error("Erro ao buscar os devs:", err);
    }
  };

  const handleDetailClick = (dev) => {
    setSelectedDev(dev);
    setOpenDetail(true);
  };

  const handleEditClick = (dev) => {
    setSelectedDev(dev);
    setEditedDev({
      nome: dev.nome,
      sexo: dev.sexo,
      idade: dev.idade,
      data_nascimento: dev.data_nascimento,
      hobby: dev.hobby,
      nivel_id: dev.nivel_id,
    });
    setOpenEdit(true);
  };

  const handleEditSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/dev/${selectedDev.id}`,
        editedDev
      );
      if (response.status === 200) {
        fetchDevs();
        setOpenEdit(false);
      }
    } catch (err) {
      console.error("Erro ao editar o dev:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/dev/${id}`);
      setDevs(devs.filter((dev) => dev.id !== id));
    } catch (err) {
      console.error("Erro ao excluir o dev:", err);
    }
  };

  return (
    <section className="bg-zinc-200 min-h-60 max-h-72 overflow-y-scroll rounded-md flex flex-col gap-6 px-6 py-4 border-2 border-black box-shadow-form">
      <h2 className="font-semibold text-2xl">Devs</h2>
      <div>
        {devs.length > 0 ? (
          devs.map((dev) => (
            <span key={dev.id} className="flex flex-col gap-3 px-2 py-0.5">
              <section className="flex justify-between items-center gap-20 px-3">
                <div className="flex justify-between items-center gap-10 text-xl">
                  <h3>ID: {dev.id}</h3>
                  <p>{dev.nome}</p>
                </div>
                <div className="flex gap-4 text-lg">
                  <button
                    onClick={() => handleDetailClick(dev)}
                    className="button-default bg-secondary hover:bg-primary"
                  >
                    Detalhes
                  </button>
                  <button
                    onClick={() => handleEditClick(dev)}
                    className="button-default bg-secondary hover:bg-primary"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => setOpenDelete(true)}
                    className="button-default bg-red-700 hover:bg-red-800"
                  >
                    Excluir
                  </button>

                  <Modal open={openDetail} onClose={() => setOpenDetail(false)}>
                    <section className="flex flex-col items-center gap-6 bg-zinc-300 px-7 py-4 rounded-lg w-3/6">
                      {selectedDev && (
                        <div className="flex flex-col gap-8 items-center justify-center">
                          <h3 className="font-bold text-2xl">
                            Detalhes do Dev: {selectedDev.nome}
                          </h3>

                          <div className="flex gap-4">
                            <p className="dev-info">ID: {selectedDev.id}</p>
                            <p className="dev-info">Nome: {selectedDev.nome}</p>
                            <p className="dev-info">Sexo: {selectedDev.sexo}</p>
                          </div>

                          <div className="flex gap-4">
                            <p className="dev-info">
                              Idade: {selectedDev.idade}
                            </p>
                            <p className="dev-info">
                              Data de Nascimento:
                              {
                                new Date(selectedDev.data_nascimento)
                                  .toISOString()
                                  .split("T")[0]
                              }
                            </p>
                            <p className="dev-info">
                              Hobby: {selectedDev.hobby}
                            </p>
                          </div>

                          <p className="dev-info">
                            Nível: {selectedDev.nivel.nome}
                          </p>

                          <button
                            className="button-default bg-secondary hover:bg-primary self-end mt-16"
                            onClick={() => setOpenDetail(false)}
                          >
                            Fechar
                          </button>
                        </div>
                      )}
                    </section>
                  </Modal>

                  <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
                    <section className="flex flex-col items-center gap-6 bg-zinc-300 px-7 py-4 rounded-lg w-3/6">
                      <h3 className="font-bold text-2xl">
                        Editar Dev: {selectedDev?.nome}
                      </h3>

                      <div className="flex flex-col gap-4">
                        <label value="nome" className="dev-info flex gap-2">
                          Nome:
                          <input
                            type="text"
                            id="nome"
                            value={editedDev.nome}
                            onChange={(e) =>
                              setEditedDev({
                                ...editedDev,
                                nome: e.target.value,
                              })
                            }
                            className="outline-none"
                          />
                        </label>

                        <label value="sexo" className="dev-info flex gap-2">
                          Sexo:
                          <input
                            type="text"
                            id="sexo"
                            value={editedDev.sexo}
                            onChange={(e) =>
                              setEditedDev({
                                ...editedDev,
                                sexo: e.target.value,
                              })
                            }
                            className="outline-none"
                          />
                        </label>

                        <label value="idade" className="dev-info flex gap-2">
                          Idade:
                          <input
                            type="text"
                            id="idade"
                            value={editedDev.idade}
                            onChange={(e) =>
                              setEditedDev({
                                ...editedDev,
                                idade: e.target.value,
                              })
                            }
                            className="outline-none"
                          />
                        </label>

                        <label
                          value="data_nascimento"
                          className="dev-info flex gap-2"
                        >
                          Data de Nascimento:
                          <input
                            type="date"
                            id="data_nascimento"
                            value={editedDev.data_nascimento}
                            onChange={(e) =>
                              setEditedDev({
                                ...editedDev,
                                data_nascimento: e.target.value,
                              })
                            }
                            className="outline-none"
                          />
                        </label>

                        <label value="hobby" className="dev-info flex gap-2">
                          Hobby:
                          <input
                            type="text"
                            id="hobby"
                            value={editedDev.hobby}
                            onChange={(e) =>
                              setEditedDev({
                                ...editedDev,
                                hobby: e.target.value,
                              })
                            }
                            className="outline-none"
                          />
                        </label>

                        <div className="flex flex-col gap-1">
                          <button
                            onClick={() => {
                              handleEditSubmit();
                              setOpenEdit(false);
                            }}
                            className="button-default bg-secondary hover:bg-primary mt-4"
                          >
                            Salvar Alterações
                          </button>

                          <button
                            onClick={() => setOpenEdit(false)}
                            className="button-default bg-secondary hover:bg-primary mt-2"
                          >
                            Fechar
                          </button>
                        </div>
                      </div>
                    </section>
                  </Modal>

                  <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
                    <section className="flex flex-col items-center gap-6 bg-zinc-300 px-7 py-4 rounded-lg">
                      <div className="flex gap-4 items-center">
                        <h3 className="font-bold text-xl">Você tem certeza?</h3>
                        <FaTrash className="text-red-600 size-8" />
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleDelete(dev.id)}
                          className="button-default bg-red-700 hover:bg-red-800"
                        >
                          Sim
                        </button>
                        <button
                          onClick={() => setOpenDelete(false)}
                          className="button-default bg-secondary hover:bg-primary"
                        >
                          Não
                        </button>
                      </div>
                    </section>
                  </Modal>
                </div>
              </section>
              <hr className="w-full border-t-2 mb-3 border-zinc-400 self-center" />
            </span>
          ))
        ) : (
          <span>Não há devs cadastrados no sistema.</span>
        )}
      </div>

      <ToastContainer />
    </section>
  );
};

export default DevList;
