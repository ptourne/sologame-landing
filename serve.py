#!/usr/bin/env python3

from http.server import HTTPServer, SimpleHTTPRequestHandler, test  # type: ignore
from pathlib import Path
import os
import sys
import argparse


class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Cross-Origin-Embedder-Policy", "require-corp")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()


def serve(root, port):
    os.chdir(root)

    test(CORSRequestHandler, HTTPServer, port=port)


if __name__ == "__main__":
    os.chdir(Path(__file__).resolve().parent)

    serve(".", "8060")
