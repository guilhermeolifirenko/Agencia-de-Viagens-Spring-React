package br.com.api.travels.configuracao.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.api.travels.modelo.UsuarioModelo;
import br.com.api.travels.repositorio.UsuarioRepositorio;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

    final UsuarioRepositorio usuarioRepositorio;

    public UserDetailsServiceImpl(UsuarioRepositorio usuarioRepositorio) {
        this.usuarioRepositorio = usuarioRepositorio;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UsuarioModelo usuarioModelo = usuarioRepositorio.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado com o nome: "+ username));
        return usuarioModelo;
    }
    
}
