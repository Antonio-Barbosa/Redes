import Header from "../../components/Header";
import Campo from "../../components/Campo";
import { useState } from "react";


function CasdastroProduto() {

    const [nomeProduto, setNomeProduto] = useState('');


    function adicionarProduto() {

        const nomeProduto = document.getElementById('nomeProduto');
        const descricaoProduto = document.getElementById('descricaoProduto')



        let url = 'http://localhost:3000/produto/create'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ nome: nomeProduto.value, descricao: descricaoProduto.value })
        }).then((resp) => resp.json()).then((data) => {

            if (data.error) {
                alert("Erro ao adicionar!")
            } else {
                alert("Produto adicionado!")
                window.location.href = "/"
            }

        })
    }
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">

            <Header title={"Adicionar a lista"} />
            <Campo text={"Nome do produto"} id={"nomeProduto"} placeholder={"Nome do produto"} type={"text"} value={nomeProduto} setValue={setNomeProduto} />
            <label className="text-lg font-bold " >Descrição do produto</label>
            <textarea id="descricaoProduto" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Adicione uma descrição ao produto" ></textarea>

            <div className="mt-5 mb-5 flex items-center justify-center" >
                <button
                    className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
                    onClick={adicionarProduto}
                >
                    Adicionar
                </button>
            </div>

        </div>
    )
}

export default CasdastroProduto;
