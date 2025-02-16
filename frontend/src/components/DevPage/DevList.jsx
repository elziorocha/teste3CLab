import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import DetailModal from "../modals/DetailModal";
import EditModal from "../modals/EditModal";
import DeleteModal from "../modals/deleteModal";

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
    console.log("Dev selecionado:", dev);
    setEditedDev({
      nome: dev.nome,
      sexo: dev.sexo,
      idade: dev.idade,
      data_nascimento: dev.data_nascimento,
      hobby: dev.hobby,
      nivel_id: dev.nivel.id,
    });
    setOpenEdit(true);
  };

  const handleEditChange = (e) => {
    const { id, value } = e.target;
    setEditedDev((prev) => ({ ...prev, [id]: value }));
  };

  const handleEditSubmit = async () => {
    console.log("Dados do formulário:", editedDev);

    if (/[\d]/.test(editedDev.nome)) {
      toast.error('O campo "nome" não pode conter números.');
      return;
    } else if (editedDev.sexo !== "F" && editedDev.sexo !== "M") {
      toast.error('O campo "sexo" deve conter apenas M ou F');
      return;
    } else if (!/^\d+$/.test(editedDev.idade)) {
      toast.error('O campo "idade" deve conter apenas números');
      return;
    } else if (
      !editedDev.nome ||
      !editedDev.sexo ||
      !editedDev.idade ||
      !editedDev.data_nascimento ||
      !editedDev.hobby ||
      !editedDev.nivel_id
    ) {
      toast.error("Nenhum campo pode estar em branco!");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/api/dev/${selectedDev.id}`,
        editedDev
      );
      if (response.status === 200) {
        setDevs((prevDevs) =>
          prevDevs.map((dev) =>
            dev.id === selectedDev.id ? { ...dev, ...editedDev } : dev
          )
        );
        toast.success("Desenvolvedor atualizado com sucesso!");
        setOpenEdit(false);
      }
    } catch (err) {
      console.error("Erro ao editar o dev:", err);
      toast.error("Erro ao atualizar o desenvolvedor.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/dev/${id}`);
      setDevs(devs.filter((dev) => dev.id !== id));
      toast.success("Desenvolvedor excluído com sucesso!");
    } catch (err) {
      console.error("Erro ao excluir o dev:", err);
      toast.error("Erro ao excluir o desenvolvedor.");
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
                    onClick={() => {
                      setSelectedDev(dev);
                      setOpenDelete(true);
                    }}
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

      <DetailModal
        open={openDetail}
        onClose={() => setOpenDetail(false)}
        selectedDev={selectedDev}
      />

      <EditModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        selectedDev={selectedDev}
        editedDev={editedDev}
        handleEditChange={handleEditChange}
        handleEditSubmit={handleEditSubmit}
      />

      <DeleteModal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        handleDelete={handleDelete}
        devId={selectedDev?.id}
      />

      <ToastContainer />
    </section>
  );
};

export default DevList;
