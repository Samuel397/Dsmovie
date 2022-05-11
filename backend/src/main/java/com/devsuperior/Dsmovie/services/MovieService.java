package com.devsuperior.Dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.Dsmovie.dto.MovieDTO;
import com.devsuperior.Dsmovie.entities.Movie;
import com.devsuperior.Dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pegeable){
		Page<Movie> result = repository.findAll(pegeable);
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		return page;
	}
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id){
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}
}
