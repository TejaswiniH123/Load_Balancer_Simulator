package com.loadbalancer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ServerResponseDto {

    private Long id;

    private String name;

    private int currentConnections;

    private boolean active;
}