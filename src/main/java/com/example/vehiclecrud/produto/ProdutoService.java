package com.example.vehiclecrud.produto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository produtoRepository;
    public List<Produto> findAll() {
        return produtoRepository.findAll();//Listar dados
    }

}
