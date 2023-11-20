import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import styles from "@/styles/Filme.module.css"
import Head from "next/head";

export default function FilmeId() {

  let router = useRouter();

  const [filme, setFilme] = useState();

  useEffect(() => {
    if (router.query.id) {
      axios.get(`http://localhost:1337/api/filmes/${router.query.id}?populate=*`)
        .then((res) => setFilme(res.data.data))
        .catch((error) => console.log(error))
    }
  }, [router])

  console.log(filme)

  if (filme) return (
    <>
      <Head>
        <title>{filme.attributes.titulo}</title>
      </Head>

      <main className={styles.containerPrincipal}>

        <section className={styles.containerInfosSize}>
          <img className={styles.imgFundo} src={"http://localhost:1337" + filme.attributes.imagem_fundo.data.attributes.url} alt="" />

          <div className={styles.infos}>
            <img className={styles.imgCapa} src={"http://localhost:1337" + filme.attributes.imagem_capa.data.attributes.url} alt="" />

            <div className={styles.containerInfos}>
              <div className={styles.containerTituloTemporadaGeneroIdade}>
                <div className={styles.containerTituloTemporada}>
                  <h1>{filme.attributes.titulo}</h1>
                  <p>{filme.attributes?.temporadas ? filme.attributes.temporadas + " temporadas" : ""}</p>
                </div>
                <div className={styles.containerIdadeGenero}>
                  <p className={styles.idade}>{filme.attributes?.idade ? filme.attributes?.idade : ""}</p>
                  <div className={styles.containerGenero}>
                    {filme.attributes?.genero_filmes.data.map((genero) => (
                      <p key={genero.id}>{genero.attributes.nome}</p>
                    ))}
                  </div>
                </div>
              </div>

              <p>{filme.attributes.descricao}</p>

              <p><strong>Idioma original: </strong>{filme.attributes.idioma.data.attributes.nome}</p>

              <div className={styles.containerAvaliacao}>
                <p><strong>Avaliação dos usuários:</strong></p>
                <div className={styles.containerProgressResult}>
                  <progress
                    className={styles.progressAvaliacao}
                    value={Number(filme.attributes.avaliacoes_positivas) - Number(filme.attributes.avaliacoes_negativas)}
                    max={Number(filme.attributes.avaliacoes_positivas) + Number(filme.attributes.avaliacoes_negativas)}>
                  </progress>
                  <p>{(((Number(filme.attributes.avaliacoes_positivas) - Number(filme.attributes.avaliacoes_negativas)) / (Number(filme.attributes.avaliacoes_positivas) + Number(filme.attributes.avaliacoes_negativas))) * 100).toFixed(2) + "%"}</p>
                </div>
              </div>

              <div className={styles.containerPalavrasChaves}>
                <p><strong>Palavras chaves: </strong></p>
                {filme.attributes?.palavra_chaves.data.map((palavra) => (
                  <p className={styles.palavraChave} key={palavra.id}>{palavra.attributes.nome}</p>
                ))}
              </div>

              <div className={styles.containerOndeAssistir}>
                <p><strong>Onde assistir: </strong></p>
                { }
              </div>
            </div>
          </div>
        </section>

        <section className={styles.imagens}>
          <h2>Imagens</h2>

          <div className={styles.containerImagens}>
            {filme.attributes?.imagens.data.map((imagem) => (
              <img className={styles.imagem} src={"http://localhost:1337" + imagem.attributes.url} alt="" />
            ))}
          </div>
        </section>

        <section className={styles.elenco}>
          <h2>Elenco</h2>

          <div className={styles.containerElencoImagens}>
            {filme.attributes?.elenco_imagens.data.map((imagem) => (
              <img className={styles.imagemElenco} src={"http://localhost:1337" + imagem.attributes.url} alt="" />
            ))}
          </div>
        </section>

      </main>
    </>
  )
}