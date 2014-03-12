organization := "com.assembla.scala-incubator"

name := "scala-graph-site"

version := "1.8.0"

scalaVersion := "2.10.3"

libraryDependencies ++= Seq(
  "org.scala-lang" % "scala-reflect" % scalaVersion.value,
  "junit" % "junit" % "4.8.2" % "test",
  "org.scalatest"  %% "scalatest"  % "1.9.2"  % "test"
)
