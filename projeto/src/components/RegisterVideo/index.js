import React from "react"
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";


const PROJECT_URL = "https://wyvtibzgtddgycxsnure.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5dnRpYnpndGRkZ3ljeHNudXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDU2OTEsImV4cCI6MTk4Mzc4MTY5MX0.T7Beypy9jCm7zQVdltgFbQ44kiq1qBV7_cnCBVX2_Vo"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

// parte da leitura
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return { 
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name
                setValues({
                    ...values,
                    [name]: value,
            }); 
        },
        clearForm() {
            setValues({});
        }  
    };
}


export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: {titulo: "Video", url: "https://wyvtibzgtddgycxsnure.supabase.cofwfwfwfw"}
    });
    const [formVisivel, setFormVisivel] = React.useState(false);



    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    // evita que o submit recarregue a pagina toda vez
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        console.log(formCadastro.values);
                        // Contrato Entre o nosso Front e o BackEnd
                        supabase.from("video").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: formCadastro.values.url,
                            playlist: "jogos",
                         })
                         .then((oqueveio) => {
                            console.log(oqueveio);
                         })
                         .catch((err) => {
                            console.log(err);
                         })
                         setFormVisivel(false);
                         formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="Close-modal" onClick={() => setFormVisivel(false)}>
                                x
                            </button>
                            <input placeholder="Titulo do video"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input 
                                 placeholder="URL" 
                                 name="url"
                                 value={formCadastro.values.url}
                                 onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}
