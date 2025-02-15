import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const DevList = () => {
  const [devs, setDevs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newNome, setNewNome] = useState("");

  useEffect(() => {
    fetchdevs();
  }, []);

  const fetchdevs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/dev");
      setDevs(response.data);
    } catch (err) {
      console.error("Erro ao buscar os devs:", err);
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

  const handleEdit = (dev) => {
    setEditId(dev.id);
    setNewNome(dev.nome);
  };

  const handleSave = async (id) => {
    if (/^\d+$/.test(newNome)) {
      toast.error("O nome do dev não pode conter números!");
      return;
    } else if (newNome === "") {
      toast.error("O nome do dev não pode estar em branco!");
      return;
    }

    try {
      await axios.put(`http://localhost:3000/api/dev/${id}`, {
        nome: newNome,
      });
      setDevs(
        devs.map((dev) => (dev.id === id ? { ...dev, nome: newNome } : dev))
      );

      setEditId(null);
      setNewNome("");
      toast.success("Dev alterado com sucesso!");
    } catch (error) {
      console.error("Erro ao editar dev:", error);
      toast.error("Falha ao alterar dev");
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
                <div className="flex justify-between items-center gap-2 text-xl">
                  <h3>{dev.id}</h3>
                  {editId === dev.id ? (
                    <input
                      type="text"
                      value={newNome}
                      onChange={(e) => setNewNome(e.target.value)}
                      className="border px-2 py-1"
                    />
                  ) : (
                    <p>{dev.nome}</p>
                  )}
                </div>
                <div className="flex gap-4 text-lg">
                  {editId === dev.id ? (
                    <button
                      onClick={() => handleSave(dev.id)}
                      className="button-default bg-green-700 hover:bg-green-800"
                    >
                      Salvar
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(dev)}
                      className="button-default bg-secondary hover:bg-primary"
                    >
                      Editar
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(dev.id)}
                    className="button-default bg-red-700 hover:bg-red-800"
                  >
                    Excluir
                  </button>
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
