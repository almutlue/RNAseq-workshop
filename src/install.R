install.packages(c("BiocManager", "remotes", "dplyr"))
BiocManager::install(c("SummarizedExperiment", "airway", "AnnotationDbi",
                        "org.Mm.eg.db", "DESeq2", "Seurat", "GEOquery",
                        "clusterProfiler", "vsn"))