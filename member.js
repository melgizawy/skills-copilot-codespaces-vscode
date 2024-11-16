function skillsMember() {
    var member = this;
    member.skills = {
        "C#": 10,
        "Java": 10,
        "JavaScript": 10,
        "SQL": 10,
        "HTML": 10,
        "CSS": 10,
        "Angular": 10,
        "React": 10,
        "NodeJS": 10,
        "ExpressJS": 10,
        "MongoDB": 10,
        "MySQL": 10,
        "PostgreSQL": 10,
        "Redis": 10,
        "RabbitMQ": 10,
        "Kafka": 10,
        "Docker": 10,
        "Kubernetes": 10,
        "Jenkins": 10,
        "Git": 10,
        "Agile": 10,
        "Scrum": 10,
        "Kanban": 10,
        "TDD": 10,
        "BDD": 10,
        "CI/CD": 10,
        "Microservices": 10,
        "REST": 10,
        "SOAP": 10,
        "GraphQL": 10,
        "Distributed Systems": 10,
        "KISS": 10,
        "DRY": 10,
        "SOLID": 10,
        "OOD": 10,
        "OOP": 10,
        "Design Patterns": 10,
        "Refactoring": 10,
        "Code Review": 10,
        "Unit Testing": 10,
        "Integration Testing": 10,
        "End-to-end Testing": 10,
        "Performance Testing": 10,
        "Security Testing": 10,
        "Static Analysis": 10,
        "Logging": 10,
        "Monitoring": 10,
        "Alerting": 10,
        "Incident Response": 10,
        "Root Cause Analysis": 10,
        "Continuous Improvement": 10,
        "Mentoring": 10,
        "Training": 10,
        "Pair Programming": 10
    };
    member.level = function(skill) {
        return member.skills[skill];
    };
    member.addSkill = function(skill, level) {
        member.skills[skill] = level;
    };
    member.removeSkill = function(skill) {
        delete member.skills[skill];
    };
    return member;