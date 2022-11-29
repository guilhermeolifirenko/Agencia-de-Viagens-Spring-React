package br.com.api.travels.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.travels.modelo.PassagemModelo;
import br.com.api.travels.modelo.RespostaModelo;
import br.com.api.travels.repositorio.PassagemRepositorio;

@Service
public class PassagemServico {

    @Autowired
    private PassagemRepositorio pr;

    @Autowired
    private RespostaModelo rm;

    // Método listar
    public Iterable<PassagemModelo> listar() {
        return pr.findAll();
    }

    // Método cadastrar ou alterar
    public ResponseEntity<?> cadastrarAlterar(PassagemModelo pm, String acao) {
        if (pm.getPartida().equals("")) {
            rm.setMensagem("Informe o seu local de partida!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getChegada().equals("")) {
            rm.setMensagem("Informe o local de chegada!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getData().equals("")) {
            rm.setMensagem("Informe a data da viagem!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getPassageiros().equals("")) {
            rm.setMensagem("Informe a quantidade de passageiros!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<PassagemModelo>(pr.save(pm), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<PassagemModelo>(pr.save(pm), HttpStatus.OK);
            }
        }
    }

    // Método remover
    public ResponseEntity<RespostaModelo> remover(long codigo) {

        pr.deleteById(codigo);

        // Mensagem
        rm.setMensagem("A passagem foi removida com sucesso!");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }

}
