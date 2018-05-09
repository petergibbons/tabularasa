<?php 
// Check that a callback function has been specified:
if (!isset($_GET['callback']) || !isset($_GET['directory'])) exit;
 
// Use PHP5's scandir function to scan all
// of images directory:
$dirContents = scandir($_GET['directory']);
 
// Define function to confirm each
// filename is a valid image name/extension:
function isImageFile($src) {
    return preg_match('/^.+.(gif|png|jpe?g|bmp|tif)$/i', $src);
}
 
// Loop through directory files and add to
// $arrayContents on each iteration:
$arrayContents = '';
foreach($dirContents as $image) {
    if (isImageFile($image)) {
        $arrayContents .= !empty($arrayContents) ? ',' : '';
        $arrayContents .= '"' . 'images/' . $image . '"';
    }
}
 
// Prepate JSON(P) output
$output = $_GET['callback'] . '({'images':[' . $arrayContents . ']});';
 
// Output the output:
echo $output;

?>