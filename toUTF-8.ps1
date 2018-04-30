$srcDir = "outputNanoc"
$dstDir = "output"
rmdir .\$srcDir -Recurse
ren   .\$dstDir $srcDir
foreach($f in Get-ChildItem .\$srcDir -Recurse) {
  $dest = $f.Fullname.Replace($srcDir, $dstDir)
  # echo "$dest $($f.PSIsContainer)"
  if ($f.PSIsContainer) {
    # echo "creating $dest"
    New-Item $dest -type Directory
  } else {
    $ext = $f.Extension
    # echo "ext = $ext"
    if ($ext.Equals(".html") -or $ext.Equals(".css") -or $ext.Equals(".js")) {
      echo "converting $f..."
      get-content $f.Fullname | out-file -encoding utf8 -filepath $dest
    } else {
      echo "copying    $f..."
      copy $f.Fullname $dest
    }
  }
}
