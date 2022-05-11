package com.devsuperior.Dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.Dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	

}
