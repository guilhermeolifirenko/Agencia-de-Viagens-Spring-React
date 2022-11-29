package br.com.api.travels.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.travels.modelo.PassagemModelo;

@Repository
public interface PassagemRepositorio extends CrudRepository<PassagemModelo, Long>{
    
}
