# Covid-19 Cases Emulation and Analytics Project

## Overview

This project focuses on storing and analyzing Covid-19 datasets using an emulation-based system for distributed file storage and computation. We will develop three different implementations of an **Emulated Distributed File System (EDFS)** using **Firebase**, **MySQL**, and **MongoDB**. The project also implements **Partition-Based Map and Reduce (PMR)** to process and analyze the datasets. Finally, a web application will be developed to allow users to interactively search and analyze the data stored in the EDFS.

## Team Members and Responsibilities

1. **Jialu Hou**: Firebase-based emulation and analytics  
   *Email*: jialuhou@usc.edu

2. **Yuwen Yuan**: MySQL-based emulation and analytics  
   *Email*: yuwenyua@usc.edu

3. **Junhan Zhou**: MongoDB-based emulation and analytics  
   *Email*: junhan@usc.edu

4. **Hang Zheng**: Implementing partition-based map and reduce, analytics  
   *Email*: hangzhen@usc.edu

5. **Anna Zhao**: Web app development and analytics  
   *Email*: annaz@usc.edu

## Datasets Used

- **Country_wise_latest.csv**: Contains the latest country-level Covid-19 cases, recoveries, deaths, and their percentages.
- **Covid_19_clean_complete.csv**: Daily country-wise Covid-19 cases, providing information on confirmed, active, death, and recovered cases.
- **Day_wise.csv**: Day-wise Covid-19 cases without country-level data, including daily confirmed, active, death, and recovered cases.
- **Full_grouped.csv**: Day-to-day country-wise Covid-19 cases, including state/province-level data.
- **Worldometer_data.csv**: Country-wise population data, including the latest Covid-19 statistics such as new cases and deaths.

## Project Structure

### 1. **Emulated Distributed File System (EDFS)**

We developed three different EDFS implementations to store the datasets:
- **Firebase-based EDFS**: Directory structure stored in a Firebase JSON object with partitions stored in Firebase URLs.
- **MySQL-based EDFS**: Directory structure, file metadata, and partition information stored in MySQL tables.
- **MongoDB-based EDFS**: Directory structure stored in a MongoDB collection, with partitions stored in another collection.

### 2. **Partition-Based Map and Reduce (PMR)**

We implement the **MapReduce** paradigm to process and analyze the datasets:
- **Map**: Processes data in each partition.
- **Reduce**: Combines the results of the map function from different partitions to produce the final output.

### 3. **Web Application**

A Python-based web app is developed to allow users to interactively:
- Navigate the EDFS directories.
- Run PMR operations to search and analyze Covid-19 data.
- Visualize input/output of the map and reduce functions.

### 3. **Interacting with the Data**

- The web app provides three subpages corresponding to the three EDFS implementations (Firebase, MySQL, MongoDB).
- Users can explore the directory structure, upload files, and run map/reduce tasks on the datasets.
- Each subpage has a guide for running analytics, which shows the input/output of map and reduce functions.


## Contributors

- **Jialu Hou**, **Yuwen Yuan**, **Junhan Zhou**, **Hang Zheng**, **Anna Zhao**
