use jobsahoy_sample; -- Database name

-- Tables with dummy data
CREATE TABLE IF NOT EXISTS `admin_user` (
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL AUTO_INCREMENT,
  `admin_user_name` varchar(255) NOT NULL,
  `admin_user_email` varchar(255) NOT NULL,
  `admin_user_phone` varchar(12) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admin_user_email` (`admin_user_email`),
  UNIQUE KEY `admin_user_phone` (`admin_user_phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `company_desc` varchar(1000) NOT NULL,
  `company_link` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `company_link` (`company_link`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `job_type` (
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_job_type_type_name` (`type_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `job_profile` (
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL AUTO_INCREMENT,
  `profile_name` varchar(255) NOT NULL,
  `profile_tags` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_job_profile_profile_name` (`profile_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(255) NOT NULL,
  `location_desc` varchar(500) DEFAULT NULL,
  `location_country` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_location_location_name` (`location_name`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `visa_job` (
  `job_location` json NOT NULL,
  `job_desc` mediumtext NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL AUTO_INCREMENT,
  `job_title` varchar(255) NOT NULL,
  `job_experience_min` int NOT NULL,
  `job_experience_max` int NOT NULL,
  `job_sponsored` tinyint(1) NOT NULL,
  `job_selfapply_link` varchar(500) DEFAULT NULL,
  `job_link` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `post_date` datetime DEFAULT NULL,
  `expiry_date` datetime DEFAULT NULL,
  `job_type` int DEFAULT NULL,
  `approved_by` int DEFAULT NULL,
  `job_company` int DEFAULT NULL,
  `selected_profile` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `job_link` (`job_link`),
  KEY `job_type` (`job_type`),
  KEY `approved_by` (`approved_by`),
  KEY `job_company` (`job_company`),
  KEY `selected_profile` (`selected_profile`),
  CONSTRAINT `visa_job_ibfk_1` FOREIGN KEY (`job_type`) REFERENCES `job_type` (`id`),
  CONSTRAINT `visa_job_ibfk_2` FOREIGN KEY (`approved_by`) REFERENCES `admin_user` (`id`),
  CONSTRAINT `visa_job_ibfk_3` FOREIGN KEY (`job_company`) REFERENCES `company` (`id`),
  CONSTRAINT `visa_job_ibfk_4` FOREIGN KEY (`selected_profile`) REFERENCES `job_profile` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `location_connector` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location_id` int NOT NULL,
  `visa_job_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `location_id` (`location_id`),
  KEY `visa_job_id` (`visa_job_id`),
  CONSTRAINT `location_connector_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `location_connector_ibfk_2` FOREIGN KEY (`visa_job_id`) REFERENCES `visa_job` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `user` (
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_phone` varchar(12) DEFAULT NULL,
  `selected_profile` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email` (`user_email`),
  UNIQUE KEY `user_phone` (`user_phone`),
  KEY `selected_profile` (`selected_profile`)
--  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`selected_profile`) REFERENCES `user_profile` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `user_profile` (
  `user_profile_desc` text,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL AUTO_INCREMENT,
  `user_profile_experience` int NOT NULL,
  `user_id` int NOT NULL,
  `job_profile_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `job_profile_id` (`job_profile_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_profile_ibfk_1` FOREIGN KEY (`job_profile_id`) REFERENCES `job_profile` (`id`),
  CONSTRAINT `user_profile_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE `user` ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`selected_profile`) REFERENCES `user_profile` (`id`);

CREATE TABLE IF NOT EXISTS `applied_job` (
  `applied_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL AUTO_INCREMENT,
  `visa_job_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `visa_job_id` (`visa_job_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `applied_job_ibfk_1` FOREIGN KEY (`visa_job_id`) REFERENCES `visa_job` (`id`),
  CONSTRAINT `applied_job_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `saved_job` (
  `saved_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `id` int NOT NULL AUTO_INCREMENT,
  `visa_job_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `visa_job_id` (`visa_job_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `saved_job_ibfk_1` FOREIGN KEY (`visa_job_id`) REFERENCES `visa_job` (`id`),
  CONSTRAINT `saved_job_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dummy Data
INSERT INTO `admin_user` (`created_at`, `id`, `admin_user_name`, `admin_user_email`, `admin_user_phone`) VALUES
(NOW(), 1, 'admin', 'admin@example.com', '1234567890');

INSERT INTO `company` (`id`, `company_name`, `company_desc`, `company_link`) VALUES
(1, 'Acme Technologies', 'Acme Technologies is a leading provider of software solutions for businesses worldwide.', 'https://www.acmetech.com'),
(2, 'ByteSoft Solutions', 'ByteSoft Solutions specializes in developing custom software applications for various industries.', 'https://www.bytesoftsolutions.com'),
(3, 'Tech Innovators Inc.', 'Tech Innovators Inc. is a cutting-edge technology company focused on AI and machine learning.', 'https://www.techinnovators.com'),
(4, 'Data Dynamics Corporation', 'Data Dynamics Corporation offers comprehensive data management solutions for enterprises.', 'https://www.datadynamicscorp.com'),
(5, 'CloudWorks Limited', 'CloudWorks Limited provides cloud computing services tailored to meet the needs of businesses of all sizes.', 'https://www.cloudworks.com'),
(6, 'CodeCrafters LLC', 'CodeCrafters LLC specializes in developing innovative software solutions for diverse industries.', 'https://www.codecraftersllc.com'),
(7, 'Infinite Innovations', 'Infinite Innovations is dedicated to creating cutting-edge technology products for the modern world.', 'https://www.infiniteinnovations.com'),
(8, 'SysTech Solutions', 'SysTech Solutions offers IT consulting services and enterprise software solutions to optimize business operations.', 'https://www.systechsolutions.com'),
(9, 'DataStream Technologies', 'DataStream Technologies provides advanced data analytics solutions to help businesses make informed decisions.', 'https://www.datastreamtech.com'),
(10, 'NetGenX Technologies', 'NetGenX Technologies is a leading provider of networking solutions and IT infrastructure services.', 'https://www.netgenxtech.com');

INSERT INTO `job_type` (`created_at`, `id`, `type_name`) VALUES
(NOW(), 1, 'Onsite'),
(NOW(), 2, 'Hybrid'),
(NOW(), 3, 'Remote');

INSERT INTO `job_profile` (`created_at`, `id`, `profile_name`, `profile_tags`) VALUES
(NOW(), 1, 'Software Developer', 'Software, Developer, Programming'),
(NOW(), 2, 'Data Analyst', 'Data, Analyst, Analytics'),
(NOW(), 3, 'Network Engineer', 'Network, Engineer, Networking'),
(NOW(), 4, 'System Administrator', 'System, Administrator, Administration'),
(NOW(), 5, 'UI/UX Designer', 'UI, UX, Designer, User Interface, User Experience'),
(NOW(), 6, 'Cybersecurity Specialist', 'Cybersecurity, Specialist, Security');

INSERT INTO `location` (`id`, `location_name`, `location_desc`, `location_country`) VALUES
(1, 'New York', 'The bustling city known for its finance and technology sectors.', 'United States'),
(2, 'London', 'The capital city of the United Kingdom, known for its cultural heritage and financial hub.', 'United Kingdom'),
(3, 'Tokyo', 'The vibrant capital of Japan, famous for its technological innovation and bustling streets.', 'Japan'),
(4, 'San Francisco', 'Located in California, its a major tech hub known for its startups and innovation.', 'United States'),
(5, 'Berlin', 'The capital city of Germany, known for its startup culture and creative energy.', 'Germany'),
(6, 'Singapore', 'A city-state in Southeast Asia known for its efficient infrastructure and tech-savvy environment.', 'Singapore'),
(7, 'Bangalore', 'A major tech hub in India, known as the Silicon Valley of India.', 'India'),
(8, 'Sydney', 'The largest city in Australia, known for its beautiful beaches and thriving tech scene.', 'Australia'),
(9, 'Shanghai', 'A bustling metropolis in China known for its rapid development and financial prowess.', 'China'),
(10, 'Dublin', 'The capital city of Ireland, known for its welcoming atmosphere and thriving tech industry.', 'Ireland'),
(11, 'Toronto', 'The capital city of Ontario, Canada, known for its diverse population and tech startups.', 'Canada'),
(12, 'Seoul', 'The capital city of South Korea, known for its technological advancements and vibrant culture.', 'South Korea'),
(13, 'Austin', 'The capital city of Texas, USA, known for its live music scene and growing tech industry.', 'United States'),
(14, 'Stockholm', 'The capital city of Sweden, known for its innovation and high quality of life.', 'Sweden'),
(15, 'Sao Paulo', 'The largest city in Brazil, known for its diverse culture and emerging tech scene.', 'Brazil');

INSERT INTO `visa_job` (`job_location`, `job_desc`, `created_at`, `id`, `job_title`, `job_experience_min`, `job_experience_max`, `job_sponsored`, `job_selfapply_link`, `job_link`, `active`, `post_date`, `expiry_date`, `job_type`, `approved_by`, `job_company`, `selected_profile`) VALUES
('["Sao Paulo"]', 'We are seeking a skilled Software Developer to join our dynamic team.', NOW(), 1, 'Software Developer', 2, 5, 1, NULL, 'https://example.com/job1', 1, NULL, NULL, 1, 1, 1, 1),
('["San Francisco"]', 'Exciting opportunity for a Data Analyst to work on cutting-edge projects.', NOW(), 2, 'Data Analyst', 3, 6, 0, NULL, 'https://example.com/job2', 1, NULL, NULL, 2, 1, 2, 2),
('["London"]', 'We are hiring a Network Engineer to manage our global network infrastructure.', NOW(), 3, 'Network Engineer', 4, 8, 0, NULL, 'https://example.com/job3', 1, NULL, NULL, 3, 1, 3, 3),
('["Tokyo"]', 'Join our team as a System Administrator and ensure smooth operations.', NOW(), 4, 'System Administrator', 3, 7, 1, NULL, 'https://example.com/job4', 1, NULL, NULL, 3, 1, 4, 4),
('["Berlin"]', 'Seeking a talented UI/UX Designer to create engaging user experiences.', NOW(), 5, 'UI/UX Designer', 2, 6, 1, NULL, 'https://example.com/job5', 1, NULL, NULL, 2, 1, 5, 5),
('["Tokyo"]', 'We have an opening for a Cybersecurity Specialist to enhance our security measures.', NOW(), 6, 'Cybersecurity Specialist', 5, 10, 1, NULL, 'https://example.com/job6', 1, NULL, NULL, 1, 1, 6, 6),
('["San Francisco"]', 'Exciting opportunity for a Software Developer to work on innovative projects.', NOW(), 7, 'Software Developer', 3, 8, 1, NULL, 'https://example.com/job7', 1, NULL, NULL, 1, 1, 7, 1),
('["Austin"]', 'Join us as a Data Analyst and analyze large datasets to extract insights.', NOW(), 8, 'Data Analyst', 2, 5, 1, NULL, 'https://example.com/job8', 1, NULL, NULL, 2, 1, 8, 2),
('["Sydney"]', 'Seeking a skilled Network Engineer to design and implement network solutions.', NOW(), 9, 'Network Engineer', 4, 8, 0, NULL, 'https://example.com/job9', 1, NULL, NULL, 3, 1, 9, 3),
('["New York"]', 'We are hiring a System Administrator to manage our IT infrastructure.', NOW(), 10, 'System Administrator', 3, 7, 1, NULL, 'https://example.com/job10', 1, NULL, NULL, 3, 1, 10, 4),
('["New York"]', 'Join our team as a UI/UX Designer and create intuitive user interfaces.', NOW(), 11, 'UI/UX Designer', 2, 6, 1, NULL, 'https://example.com/job11', 1, NULL, NULL, 2, 1, 1, 5), 
('["Sao Paulo"]', 'Exciting opportunity for a Cybersecurity Specialist to strengthen our security posture.', NOW(), 12, 'Cybersecurity Specialist', 5, 10, 1, NULL, 'https://example.com/job12', 1, NULL, NULL, 1, 1, 2, 6),
('["Austin"]', 'We have an opening for a Software Developer to join our innovative team.', NOW(), 13, 'Software Developer', 3, 8, 1, NULL, 'https://example.com/job13', 1, NULL, NULL, 1, 1, 3, 1),
('["Stockholm"]', 'Seeking a talented Data Analyst to derive meaningful insights from data.', NOW(), 14, 'Data Analyst', 2, 5, 1, NULL, 'https://example.com/job14', 1, NULL, NULL, 2, 1, 4, 2),
('["Berlin"]', 'Join us as a Network Engineer and help optimize our network infrastructure.', NOW(), 15, 'Network Engineer', 4, 8, 1, NULL, 'https://example.com/job15', 1, NULL, NULL, 3, 1, 5, 3),
('["Singapore"]', 'Exciting opportunity for a System Administrator to manage our IT systems.', NOW(), 16, 'System Administrator', 3, 7, 0, NULL, 'https://example.com/job16', 1, NULL, NULL, 3, 1, 6, 4),
('["London"]', 'Join our team as a UI/UX Designer and craft beautiful user experiences.', NOW(), 17, 'UI/UX Designer', 2, 6, 1, NULL, 'https://example.com/job17', 1, NULL, NULL, 2, 1, 7, 5),
('["Tokyo"]', 'We have an opening for a Cybersecurity Specialist to enhance our cybersecurity.', NOW(), 18, 'Cybersecurity Specialist', 5, 10, 1, NULL, 'https://example.com/job18', 1, NULL, NULL, 1, 1, 8, 6),
('["San Francisco"]', 'Exciting opportunity for a Software Developer to work on challenging projects.', NOW(), 19, 'Software Developer', 3, 8, 0, NULL, 'https://example.com/job19', 1, NULL, NULL, 1, 1, 7, 1),
('["Toronto"]', 'Join us as a Data Analyst and uncover insights from our diverse datasets.', NOW(), 20, 'Data Analyst', 2, 5, 1, NULL, 'https://example.com/job20', 1, NULL, NULL, 2, 1, 10, 2);

INSERT INTO `location_connector` (`location_id`, `visa_job_id`)
VALUES
-- Entries for Software Developer jobs
(15, 1), -- Sao Paulo
(4, 7),  -- San Francisco
(13, 13),-- Austin
(4, 19),-- San Francisco

-- Entries for Data Analyst jobs
(4, 2),  -- San Francisco
(8, 8),  -- Sydney
(14, 14),-- Stockholm
(11, 20),-- Toronto
(13, 8), -- Austin

-- Entries for Network Engineer jobs
(2, 3),  -- London
(8, 9),  -- Sydney
(5, 15), -- Berlin

-- Entries for System Administrator jobs
(3, 4),  -- Tokyo
(1, 10),-- New York
(8, 16), -- Sydney

-- Entries for UI/UX Designer jobs
(5, 5),  -- Berlin
(1, 11), -- New York
(2, 17), -- London

-- Entries for Cybersecurity Specialist jobs
(3, 6),  -- Tokyo
(15, 12),-- Sao Paulo
(3, 18); -- Tokyo

INSERT INTO `user` (`created_at`, `id`, `user_name`, `user_email`, `user_phone`, `selected_profile`) VALUES
(NOW(), 1, 'John Doe', 'john@example.com', '1234567890', NULL),
(NOW(), 2, 'Jane Smith', 'jane@example.com', '9876543210', NULL),
(NOW(), 3, 'Michael Johnson', 'michael@example.com', '5555555555', NULL);