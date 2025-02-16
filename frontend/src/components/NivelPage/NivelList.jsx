import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import Modal from "../modals/Modal";

const NivelList = () => {
  const [niveis, setNiveis] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newNome, setNewNome] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [devsCount, setDevsCount] = useState({});

  useEffect(() => {
    fetchNiveis();
  }, []);

  const fetchNiveis = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/nivel");
      setNiveis(response.data);

      response.data.forEach((nivel) => fetchDevsCount(nivel.id));
    } catch (err) {
      console.error("Erro ao buscar os níveis:", err);
    }
  };

  const fetchDevsCount = async (nivelId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/dev?nivelId=${nivelId}`
      );
      setDevsCount((prev) => ({ ...prev, [nivelId]: response.data.length }));
    } catch (err) {
      console.error("Erro ao buscar a quantidade de desenvolvedores:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/nivel/${id}`);
      setNiveis(niveis.filter((nivel) => nivel.id !== id));
      setDevsCount((prev) => {
        const newDevsCount = { ...prev };
        delete newDevsCount[id];
        return newDevsCount;
      });
    } catch (err) {
      console.error("Erro ao excluir o nível:", err);
    }
  };

  const handleEdit = (nivel) => {
    setEditId(nivel.id);
    setNewNome(nivel.nome);
  };

  const handleSave = async (id) => {
    if (/^\d+$/.test(newNome)) {
      toast.error("O nome do nível não pode conter apenas números!");
      return;
    } else if (newNome === "") {
      toast.error("O nome do nível não pode estar em branco!");
      return;
    }

    try {
      await axios.put(`http://localhost:3000/api/nivel/${id}`, {
        nome: newNome,
      });
      setNiveis(
        niveis.map((nivel) =>
          nivel.id === id ? { ...nivel, nome: newNome } : nivel
        )
      );

      setEditId(null);
      setNewNome("");
      toast.success("Nível alterado com sucesso!");
    } catch (error) {
      console.error("Erro ao editar nível:", error);
      toast.error("Falha ao alterar nível");
    }
  };

  return (
    <section className="bg-zinc-200 min-h-60 max-h-72 overflow-y-scroll rounded-md flex flex-col gap-6 px-6 py-4 border-2 border-black box-shadow-form">
      <h2 className="font-semibold text-2xl">Níveis</h2>
      <div>
        {niveis.length > 0 ? (
          niveis.map((nivel) => (
            <span key={nivel.id} className="flex flex-col gap-3 px-2 py-0.5">
              <section className="flex justify-between items-center gap-20 px-3">
                <div className="flex justify-between items-center gap-4 text-xl">
                  <h3>ID: {nivel.id}</h3>

                  <p>
                    Devs:{" "}
                    <span className="font-semibold">
                      {devsCount[nivel.id] || 0}
                    </span>
                  </p>

                  {editId === nivel.id ? (
                    <input
                      type="text"
                      value={newNome}
                      onChange={(e) => setNewNome(e.target.value)}
                      className="border px-2 py-1"
                    />
                  ) : (
                    <p>Nome: {nivel.nome}</p>
                  )}
                </div>
                <div className="flex gap-4 text-lg">
                  {editId === nivel.id ? (
                    <button
                      onClick={() => handleSave(nivel.id)}
                      className="button-default bg-green-700 hover:bg-green-800"
                    >
                      Salvar
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(nivel)}
                      className="button-default bg-secondary hover:bg-primary"
                    >
                      Editar
                    </button>
                  )}
                  <button
                    onClick={() => setOpenDelete(true)}
                    className="button-default bg-red-700 hover:bg-red-800"
                  >
                    Excluir
                  </button>
                  <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
                    <section className="flex flex-col items-center gap-6 bg-zinc-300 px-7 py-4 rounded-lg">
                      <div className="flex gap-4 items-center">
                        <h3 className="font-bold text-xl">Você tem certeza?</h3>
                        <FaTrash className="text-red-600 size-8" />
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleDelete(nivel.id)}
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
          <span>Não há níveis cadastrados no sistema.</span>
        )}
      </div>

      <ToastContainer />
    </section>
  );
};

export default NivelList;
