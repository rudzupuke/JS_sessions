<?php
$con = new mysqli("localhost", "root", "", "practical_task_04");

if ($con->connect_error) {
    die("Connection error" . $con->connect_error);
}

if (isset($_POST['firstname']) && $_POST['firstname'] !== ""
    && isset($_POST['lastname']) && $_POST['lastname'] !== ""
    && isset($_POST['birthdate'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $birthdate = $_POST['birthdate'];

    $sql = "INSERT INTO persons (firstName, lastName, dateOfBirth) VALUES ('$firstname', '$lastname', '$birthdate')";

    $con->query($sql);
}

if (isset($_POST['personID']) && isset($_POST['role']) && isset($_POST['salary'])) {

    $personID = $_POST['personID'];
    $role = $_POST['role'];
    $salary = $_POST['salary'];

    $sql = "INSERT INTO employees (personID, role, salary) VALUES ('$personID', '$role', '$salary')";
    $con->query($sql);
}

$personsSQL = "SELECT * FROM persons";
$personsResult = mysqli_query($con, $personsSQL);
$persons = mysqli_fetch_all($personsResult, MYSQLI_ASSOC);
mysqli_free_result($personsResult);

$employeeSQL = "SELECT persons.firstName, persons.lastName, employees.role, employees.salary FROM employees INNER JOIN persons ON employees.personID=persons.personID";
$employeeResult = mysqli_query($con, $employeeSQL);
$employees = mysqli_fetch_all($employeeResult, MYSQLI_ASSOC);
mysqli_free_result($employeeResult);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Persons | Employees</title>
</head>
<body>
    <table>
        <tr>
            <th>personID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Date of birth</th>
        </tr>
        <?php
foreach ($persons as $person):
?>
            <tr>
                <td><?=$person["personID"]?></td>
                <td><?=$person["firstName"]?></td>
                <td><?=$person["lastName"]?></td>
                <td><?=$person["dateOfBirth"]?></td>
            </tr>
        <?php
endforeach;
?>
    </table>
<br>
    <table>
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Salary</th>
        </tr>
        <?php
foreach ($employees as $employee):
?>
            <tr>
                <td><?=$employee["firstName"]?></td>
                <td><?=$employee["lastName"]?></td>
                <td><?=$employee["role"]?></td>
                <td><?=$employee["salary"]?></td>
            </tr>
        <?php
endforeach;
?>
    </table>
<br>
    <form action="index.php" method="POST">
        <label>First Name:</label>
        <input type="text" name="firstname">
        <label>Last Name:</label>
        <input type="text" name="lastname">
        <label>Date of Birth:</label>
        <input type="date" name="birthdate" max="2004-03-17">
        <button type="submit">Submit</button>
    </form>
<br>
    <form action="index.php" method="POST">
        <label>Person Id:</label>
        <select name="personID">
        <?php
foreach ($persons as $person):
?>
                <option value="<?=$person["personID"]?>"><?=$person["personID"]?></option>
        <?php
endforeach;
?>
        </select>

        <label>Role:</label>
        <select name="role">
            <option value="CEO">CEO</option>
            <option value="CTO">CTO</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="QA Engineer">QA Engineer</option>
        </select>
        <label>Salary:</label>
        <input type="number" name="salary" min="700">
        <button type="submit">Submit</button>
    </form>
</body>
<?php
$con->close();
?>
</html>